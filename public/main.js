const path = require("path");
const fs = require("fs");

// get a path to the content folder
const dirPath = path.join(__dirname, "../src/content")
let postList = [];

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        
        // iterate over the files in content file.
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                // function to search for indices in the blog post helps us detect the metadata from the content
                // acc = accumulator, element and index
                // regex to find the ---, push the indices to acc array
                const getMetadataIndices = (acc, element, i) => {
                    if (/^---/.test(element)) {
                        acc.push(i)
                    }
                    return acc
                }

                // function that parses the metadata, so it becomes like
                // title: x
                // author: x
                // Good for when we showcase the metadata on the posts page
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }

                // another function that parses the content of the post, minus the metadata
                // helpful for when displaying unique posts
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }

                const lines = contents.split("\n"); 
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000 // make a unix timestamp for the date given in the md file. Use that timestamp as an id for the post in the list
                post = {
                    id : timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    description: metadata.description ? metadata.description : "No description given",
                    slug: metadata.slug ? metadata.slug : "No slug given",
                    content: content ? content : "No content given"
                }
                postList.push(post);
                // This logic makes sure we only do this one time,
                // the i we are checking is the i we gave the files in line 14, in the forEach
                if (i === files.length - 1) {
                    const sortedList = postList.sort ((a,b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return
}

getPosts()
