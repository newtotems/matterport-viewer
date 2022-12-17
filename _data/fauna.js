const faunadb = require('faunadb'); // Make sure you have the FaunaDB Node.js client library installed

// Read the FaunaDB secret from an environment variable
const faunaSecret = process.env.FAUNADB_SECRET;

const client = new faunadb.Client({ secret: faunaSecret });
const q = faunadb.query; // Import the 'query' object from the faunadb module


module.exports = async () => {
  // Run a query to retrieve all documents from the 'records' collection
  const response = await client.query(
    q.Paginate(
      q.Match(
        q.Ref('indexes/all_records')
      )
    )
  );

  // Return the array of documents
  return response.data;
};
