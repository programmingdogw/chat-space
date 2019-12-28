#DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, unique:true|
|mail_address|string|null: false, unique:true,|

### Association
- has_many: messages
- has_many: users_groups
- has_many: groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique:true,|


### Association
- has_many: messages
- has_many: users_groups
- has_many: users, through: :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|images|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groups






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
