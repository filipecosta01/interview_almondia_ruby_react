require 'rails_helper'

RSpec.describe SecondCategory, type: :model do
  it { should validate_presence_of(:name) }
end
