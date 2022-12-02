declare -a arr=("x86_64-unknown-linux-gnu" "x86_64-pc-windows-msvc" "x86_64-apple-darwin" "aarch64-apple-darwin")

mkdir -p binaries/data
cp -a data/. binaries/data
cp data binaries/data
## now loop through the above array
for i in "${arr[@]}"
do
   echo "$i"
   deno compile --allow-net --allow-read --target $i --output binaries/twitch_mock-$i main.ts
   # or do whatever with individual element of the array
done