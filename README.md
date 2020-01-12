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

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|mails|string|null: false, unique: true|

### Association
- has_many: groups, through: :group_users
- has_many: group_users
_ has_many: messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|

### Association
- has_many: users, through: :group_users
- has_many: group_users
- has_many: messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|references|foreign_key: true|
|user_id|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user