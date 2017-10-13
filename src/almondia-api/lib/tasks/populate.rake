namespace :db do
  desc "Erase and fill database"
  task :populate => :environment do
    require 'faker'
    
    Rake::Task['db:reset'].invoke

    #Create 2000 rows for each category
    2000.times do
      FirstCategory.create do |firstCategory|
        firstCategory.name = Faker::Lorem.sentence(1, false, 3)
      end
    end

    #And so for the other categories
    2000.times do
      SecondCategory.create do |secondCategory|
        secondCategory.name = Faker::Lorem.sentence(1, false, 3)
      end
    end

    2000.times do
      ThirdCategory.create do |thirdCategory|
        thirdCategory.name = Faker::Lorem.sentence(1, false, 3)
      end
    end
  end
end