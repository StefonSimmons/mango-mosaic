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
    render json: @new_post, status: :created
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

  private

  def post_params
    params.require(:post).permit(:main_title, :subtitle, :img_URL, :content, :user_id)
  end
end
