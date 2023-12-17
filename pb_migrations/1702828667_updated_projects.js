/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75d6ulnxzr4frjp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8kxt9kkp",
    "name": "disabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75d6ulnxzr4frjp")

  // remove
  collection.schema.removeField("8kxt9kkp")

  return dao.saveCollection(collection)
})
