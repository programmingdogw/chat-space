#DB設計

## usersテーブル
add_index :users, :id

### Association
- has_many: messages
- has_many: users_groups
- has_many: groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique:true, add_index|


### Association
- has_many: messages
- has_many: users_groups
- has_many: users, through: :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, t.references :user, index: true, foreign: true|
|group_id|integer|null: false, t.references :group, index: true,foreign_key:true|


### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|images|string||
|user_id|integer|null: false, t.references :user, index: true, foreign: true|
|group_id|integer|null: false, t.references :group, index: true, foreign: true|

### Association
- belongs_to :user
- belongs_to :group






# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
