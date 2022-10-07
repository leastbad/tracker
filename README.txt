This is the companion demo for https://dev.to/leastbad/async-redis-key-mutation-notifications-in-rails-4hng

Run the app with `bin/dev`
In a seperate terminal, run `redis-cli`
Open the app in your browser, and open the console inspector
In the Redis client, type `set mykey test`
You should see a notification in your foreman log and in the console inspector

Note that it is locked to an older version of Sidekiq as the internal class structure has changed. The concepts illustrated are still sound; I only utilize Sidekiq because I needed a Ruby process that talks to Redis and has access to the Rails environment. The concepts explored in this demo have nothing to do with jobs.
