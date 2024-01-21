/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z0o9zx1x",
    "name": "platforms",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "web",
        "android",
        "ios",
        "desktop"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5h2vig679bfaogd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z0o9zx1x",
    "name": "platforms",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "web",
        "android",
        "ios"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
