/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfwc1qwe",
    "name": "project_client",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1rx9yblmms1ojxt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // remove
  collection.schema.removeField("xfwc1qwe")

  return dao.saveCollection(collection)
})
