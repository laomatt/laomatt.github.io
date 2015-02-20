text="
hut
"

puts text.split(" ").map { |e| e.split("").reject {|e|!("ABCDEFGHIJKLMNOPQRSTUVWZYZ".chars.include?(e))}.join }.uniq.map { |e| "\"#{e}\"" }.join(",")