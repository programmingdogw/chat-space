class GroupUser < ApplicationRecord
  belongs_to :group
  belongs_to :user
end


# READ.MEでLGTMもらったテーブル名とは名前が違うので注意
# 自分は多対多なので両方複数にしたが、カリキュラム見るにgroup-usersでテーブルを作っている。
# これは恐らくgroup_userを一つの塊としてみて
# それを複数形にしているということだと思われる。
# グループとユーザーの紐付けをレコードとして複数記録するためのテーブルなので自然だと思える
# 恐らくこちらが通例なのだろう
