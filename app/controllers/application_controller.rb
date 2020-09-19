class ApplicationController < ActionController::API

  SECRET_KEY = Rails.env === 'production' ? ENV['SECRET_KEY'] : Rails.application.secrets.secret_key_base.to_s
  puts 'HEEEERRE'
  puts Rails.env

  def encode(payload, expire = 12.hours.from_now)
    payload[:expire] = expire.to_i
    # JWT method for encrypting the payload and secret_key
    JWT.encode(payload, SECRET_KEY)
  end

  #For user Browser VERIFICATION
  def decode(header_token)
    # third value is the secret key.
    # second value contains information about JWT algorithm that JWT uses for encoding and decoding token
    # first value is the payload. I'm grabbing this value
    decoded_token = JWT.decode(header_token, SECRET_KEY)[0]
    # this makes it so that the string token object returned from the split header can be idenitifed as a symbol when we .find it.
    HashWithIndifferentAccess.new decoded_token
  end

  # For user Browser VERIFICATION
  def authorize_request
    header = request.headers['Authorization']
    # Separates from the word 'Bearer'. on the front-end: token pulled from local storage dropped into authorization again 
    header_token = header.split(' ').last 

    if header_token
      begin
        @decoded = decode(header_token)
        ## grabs the user.id from the User database that matches the decoded token value
        @loggedin_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end

  end
end
