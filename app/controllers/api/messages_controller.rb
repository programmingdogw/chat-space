# 同名のファイルが存在するが問題無いのでメモしておく
# 同名のクラスを区別するために名前空間を使用している点もおさえておこう

class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
  end
end