require 'rails_helper'

RSpec.describe ThirdCategory, type: :model do
  it { should validate_presence_of(:name) }
end
