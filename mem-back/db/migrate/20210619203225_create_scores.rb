class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :clicks, default: 0
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
