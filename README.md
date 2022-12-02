# Twitch Mock API

## Compiling
Must have Deno installed

`bash compile.sh` will build all possible binaries for each system

## Use

Either run the source with 
`deno --allow-net --allow-read main.ts` or execute a binary.

`cd binaries`

`twitch_mock-x86_64-pc-windows-msvc.exe 8080`

The application can take in a single argument which is the port. Default is `3030`

## Endpoint 
There is only one endpoint `/helix/clips`

This endpoint only reads a single query parameter `broadcaster_id` 

The value of `broadcaster_id` will determine the result. 

## Status codes and keywords

To force a status, you can pass in the following status codes in the `broadcaster_id`

- `/helix/clips?broadcaster_id=400` - Returns a 400 (Bad Request)
- `/helix/clips?broadcaster_id=401` - Returns a 401 (Not Authorized)
- `/helix/clips?broadcaster_id=404` - Returns a 404 (Not Found)
- `/helix/clips?broadcaster_id=500` - Returns a 500 (Server Error)
- `/helix/clips?broadcaster_id=200` - Returns a 200 (OK) (With no body content)

There is a timeout endpoint as well, that will pause execution for 30 seconds, and then returns a 408 (Timeout)
- `/helix/clips?broadcaster_id=timeout` - Returns a 408 (Timeout) after 30 seconds.


## Return Data
With the source, or the binaries, there are a collection of json files in the data directory. 

To start there are three files. To access these from the endpoint, the value of `broadcaster_id` must be set to the name of the file, minus the `.json` extension.

- `/helix/clips?broadcaster_id=1234` - Returns the twitch documentation example response (`1234.json`)
- `/helix/clips?broadcaster_id=empty_obj` - Returns an empty json object (`empy_obj.json`)
- `/helix/clips?broadcaster_id=noclips` - Returns the same documented example, with an empty array of clips. (`noclips.json`) 

To add different files, just put the json file in the data directory and use the name - `.json` in the `broadcaster_id` on the request. 

Feel free to edit the existing json files or create new ones.

*Note: the application looks for the files in the data directory reletive to the executable*
  






