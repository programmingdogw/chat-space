class MessagesController < ApplicationController
  before_action :set_group
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @membernames = @group.users
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      # redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
      # 上の行は非同期通信に変える際にコメントアウトしたhtml形式の遷移先
      respond_to do |format|
        format.json
      end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  private
  
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end
  
  def set_group
    @group = Group.find(params[:group_id])
  end

end
