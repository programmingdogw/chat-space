# カリキュラムで作成したチャットアプリです。非同期でチャットができ、写真投稿も可能です
<img width="1066" alt="portfoliopicturechatspace" src="https://user-images.githubusercontent.com/59106983/80167655-e86e4080-861b-11ea-876f-3fe97b776dee.png">


# 実際の動作（グループ作成）
![portfolipchatspace](https://user-images.githubusercontent.com/59106983/80167825-50bd2200-861c-11ea-830b-f3569164c6c6.gif)

# 実際の動作（チャット機能）
![portfoliochatspace2](https://user-images.githubusercontent.com/59106983/80167911-8e21af80-861c-11ea-8d0e-7a531944f4a9.gif)


# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, unique:true, index: true|

### Association
- has_many: messages
- has_many: users_groups
- has_many: groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique:true|


### Association
- has_many: messages
- has_many: users_groups
- has_many: users, through: :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key:true|


### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string||
|images|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group






