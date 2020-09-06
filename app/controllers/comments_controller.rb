class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @new_comment = Comment.create(comment_params)
    render json: @new_comment, status: :created
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy()
    render json: "comment deleted"
  end

  private

  def comment_params 
    params.require(:comment).permit(:commenter, :email, :social, :comment, :post_id)
  end

end
