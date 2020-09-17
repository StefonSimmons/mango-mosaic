class PostSerializer < ActiveModel::Serializer
  attributes :id, :main_title, :subtitle, :content, :user_id, :img_URL, :created_at

def img_URL
  object.img_URL.service_url if object.img_URL.attached?
end

end
