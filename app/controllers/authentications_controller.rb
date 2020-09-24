class AuthenticationsController < ApplicationController
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    @user = User.find_by_email(login_params[:email])
    # authenticate method provided by Bcrypt. Compares password credentials entered with data in the User db where user.email is the email entered.
    puts 'user here-->'
    puts @user
    if @user and @user.authenticate(login_params[:password])
      puts 'it works here. strange'
      puts @user.authenticate(login_params[:password])
      # generates an encryted token for authorized requests from the users specific browser (upon browser refresh)
      @token = encode({ user_id: @user.id })
      render json: { user: @user, token: @token }, status: :ok
    else
      render json: { errors: 'unauthorized' }
    end
  end

  # GET /auth/verify
  def verify
    render json: @loggedin_user, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:email, :password)
  end
end
