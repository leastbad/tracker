class ApplicationRecord < ActiveRecord::Base
  include CableReady::Broadcaster
  primary_abstract_class
end
