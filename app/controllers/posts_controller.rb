
class PostsController < ApplicationController


  def index
    @posts = Post.all.order(id: :desc)
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @new_post = Post.create(post_params)
    puts 'Stefon -->'
    if @new_post.save
      render json: @new_post, status: :created
    else
      render json: @new_post.errors, status: :unprocessable_entity
    end
    
  end

  def update
    @updated_post = Post.find(params[:id])
    @updated_post.update(post_params)
    render json: @updated_post
  end

  def destroy
    @destroy_post = Post.find(params[:id])
    @destroy_post.destroy()
    render json: "post has been deleted"
  end

  # CUSTOM CONTROLLER
  # SEARCH
  def search
    @posts = Post.where(
      "LOWER(main_title) LIKE ? 
      OR LOWER(subtitle) LIKE ?", 
      "%#{params[:chars]}%", 
      "%#{params[:chars]}%"
    )
    render json: @posts
  end

  private

  def post_params
    params.require(:post).permit(:main_title, :subtitle, :content, :user_id, :img_URL)
  end

  def checkImg
    
  end
  
end
