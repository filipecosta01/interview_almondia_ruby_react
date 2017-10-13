FactoryGirl.define do
  factory :third_category do
    name { Faker::Lorem.sentence(1, false, 2) }
  end
end