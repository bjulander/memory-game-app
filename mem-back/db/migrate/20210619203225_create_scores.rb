class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :clicks, default: 1000
      t.integer :user_id

      t.timestamps
    end
  end
end
