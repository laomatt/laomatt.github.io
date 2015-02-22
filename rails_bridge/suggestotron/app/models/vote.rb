class Vote < ActiveRecord::Base
belongs_to :topic
belongs_to :user
validates_presence_of :user
validates_uniqueness_of :user, scope: [:topic]
end

