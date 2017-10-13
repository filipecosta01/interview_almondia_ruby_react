require 'rails_helper'

RSpec.describe FirstCategory, type: :model do
  it { should validate_presence_of(:name) }
end
