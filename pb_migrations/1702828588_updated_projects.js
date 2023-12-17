/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75d6ulnxzr4frjp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "begnjosb",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75d6ulnxzr4frjp")

  // remove
  collection.schema.removeField("begnjosb")

  return dao.saveCollection(collection)
})
