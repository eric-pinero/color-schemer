# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_16_165554) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "colors", force: :cascade do |t|
    t.string "name", null: false
    t.integer "red", null: false
    t.integer "green", null: false
    t.integer "blue", null: false
    t.integer "complement_id", null: false
    t.index ["complement_id"], name: "index_colors_on_complement_id"
  end

  create_table "scheme_swatches", force: :cascade do |t|
    t.integer "color_id", null: false
    t.integer "scheme_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["color_id"], name: "index_scheme_swatches_on_color_id"
    t.index ["scheme_id"], name: "index_scheme_swatches_on_scheme_id"
  end

  create_table "schemes", force: :cascade do |t|
    t.string "title", null: false
    t.integer "owner_id", null: false
    t.index ["owner_id"], name: "index_schemes_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
