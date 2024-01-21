/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsiujzwq",
    "name": "tags",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // remove
  collection.schema.removeField("rsiujzwq")

  return dao.saveCollection(collection)
})
