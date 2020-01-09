#DB設計

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






