FactoryGirl.define do
  factory :first_category do
    name { Faker::Lorem.sentence(1, false, 2) }
  end
end