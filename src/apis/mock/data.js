export const propertyList = {
    "data": [
        {
            "_id": "61d465b033d0da04c5043866",
            "id": "PROP-007",
            "name": "The Mansion 7",
            "image": {
                "url": ""
            },
            "address": "Sydney, Austrailia",
            "type": "Mansion",
            "__v": 0
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 1,
            "pageCount": 3,
            "total": 3
        }
    }
}

export const elementUnits = {
    "data": {
        "checklist_areas": [
            {
                "id": "5dff03d3218b91425b9d5fa2",
                "name": "Entrance",
                "icon": {
                    "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/checklist-area-icon.png"
                },
                "order": 1,
                "checklist_groups": [
                    {
                        "id": "5dff03d3218b91425b9d5fa3",
                        "name": "Internal",
                        "icon": {
                            "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/checklist-group-icon.png"
                        },
                        "order": 1,
                        "checklist_items": [
                            {
                                "id": "5dff03d3218b91425b9d5fa3",
                                "name": "Plaster & Finished Wall",
                                "order": 1,
                                "is_disabled": true
                            },
                            {
                                "id": "5dff03d3218b91425b9d5fa4",
                                "name": "Skirtings",
                                "order": 2,
                                "is_disabled": false
                            }
                        ]
                    },
                    {
                        "id": "5dff03d3218b91425b9d5fa7",
                        "name": "Door",
                        "icon": {
                            "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/checklist-group-icon.png"
                        },
                        "order": 2,
                        "checklist_items": [
                            {
                                "id": "5dff03d3218b91425b9d5fa8",
                                "name": "Item 1",
                                "order": 1,
                                "is_disabled": false,
                                "submission": {
                                    "id": "5dff03d3218b91425b9d5ca2",
                                    "status": "completed",
                                    "feeback_status": "agree",
                                    "auditor_feeback": {
                                        "images": [
                                            {
                                                "id": "5dff03d3218b91425b9d5ca3",
                                                "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/Housing-in-Australia-2400x1600.jpeg"
                                            },
                                            {
                                                "id": "5dff03d3218b91425b9d5ca4",
                                                "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/Housing-in-Australia-2400x1600.jpeg"
                                            }
                                        ],
                                        "is_defected": true,
                                        "comment": "There is a defect on the wall"
                                    },
                                    "owner_feedback": {
                                        "is_dispute": false,
                                        "comment": "Agree"
                                    }
                                }
                            },
                            {
                                "id": "5dff03d3218b91425b9d5fa9",
                                "name": "Item 2",
                                "order": 2,
                                "is_disabled": false,
                                "submission": {
                                    "id": "5dff03d3218b91425b9d5ca2",
                                    "status": "completed",
                                    "feeback_status": "dispute",
                                    "auditor_feeback": {
                                        "is_defected": false,
                                        "comment": "No Defect found"
                                    },
                                    "owner_feedback": {
                                        "is_dispute": true,
                                        "images": [
                                            {
                                                "id": "5dff03d3218b91425b9d5ca3",
                                                "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/Housing-in-Australia-2400x1600.jpeg"
                                            },
                                            {
                                                "id": "5dff03d3218b91425b9d5ca4",
                                                "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/Housing-in-Australia-2400x1600.jpeg"
                                            }
                                        ],
                                        "comment": "There is a defect on the wall"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "5dff03d3218b91425b9d5fb2",
                "name": "Laundry",
                "icon": {
                    "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/checklist-area-icon.png"
                },
                "order": 1,
                "checklist_groups": [
                    {
                        "id": "5dff03d3218b91425b9d5fb3",
                        "name": "Internal",
                        "icon": {
                            "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/checklist-group-icon.png"
                        },
                        "order": 1,
                        "checklist_items": [
                            {
                                "id": "5dff03d3218b91425b9d5fb3",
                                "name": "Plaster & Finished Wall",
                                "order": 1,
                                "is_disabled": false,
                                "submission": {
                                    "id": "5dff03d3218b91425b9d5ca2",
                                    "status": "pending",
                                    "feeback_status": "pending",
                                    "auditor_feeback": {
                                        "is_defected": false,
                                        "comment": "No Defect found"
                                    },
                                    "owner_feedback": null
                                }
                            },
                            {
                                "id": "5dff03d3218b91425b9d5fb4",
                                "name": "Skirtings",
                                "order": 2,
                                "is_disabled": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export const appointments = {
    "data": [
        {
            "id": "5dff03d3218b91425b9d6fae",
            "status": "completed",
            "appointmentNo": "120",
            "start": "2022-01-10T19:38:34Z",
            "property": {
                "id": "61d465b033d0da04c5043866",
                "propertyNo": "PROP-004",
                "name": "The Mansion 4",
                "image": {
                    "url": "https://i.ibb.co/Y0v867r/pexels-photo-129494.jpg"
                },
                "address": "Sydney, Austrailia",
                "type": "Mansion",
                "keyFeatures": [
                    "Ambience of the neighbourhood",
                    "Security in the building and community",
                    "Verification of legal documents"
                ]
            },
            "property_unit": {
                "id": "5dff03d3218b91425b9d6faa",
                "unitNo": "UNIT-864",
                "type": "Appartment",
                "bedrooms": 2,
                "bathrooms": 2,
                "carpetArea": 1724,
                "isFurnished": true
            },
            "auditor": {
                "id": "61d78298f2f1d2c0c96fe5f6",
                "name": "Ankit Kapoor"
            },
            "owner": {
                "id": "61d78298f2f1d2c0c96fe5f5",
                "name": "Ankit Kapoor"
            },
            "notes": "Lorem Ipsum generators on the Internet tend to repeat predefined chunks as nece ssary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
        },
        {
            "id": "5dff03d3218b91425b9d6faf",
            "status": "completed",
            "appointmentNo": "119",
            "start": "2022-12-08T19:38:34Z",
            "property": {
                "id": "61d465b033d0da04c5043866",
                "propertyNo": "PROP-003",
                "name": "The Mansion 3",
                "image": {
                    "url": "https://i.ibb.co/Y0v867r/pexels-photo-129494.jpg"
                },
                "address": "Sydney, Austrailia",
                "type": "Mansion",
                "keyFeatures": [
                    "Ambience of the neighbourhood",
                    "Security in the building and community",
                    "Verification of legal documents"
                ]
            },
            "property_unit": {
                "id": "5dff03d3218b91425b9d6faa",
                "unitNo": "UNIT-869",
                "type": "Appartment",
                "bedrooms": 2,
                "bathrooms": 2,
                "carpetArea": 1724,
                "isFurnished": true
            },
            "auditor": {
                "id": "61d78298f2f1d2c0c96fe5f6",
                "name": "Ankit Kapoor"
            },
            "owner": {
                "id": "61d78298f2f1d2c0c96fe5f5",
                "name": "Ankit Kapoor"
            },
            "notes": "Lorem Ipsum generators on the Internet tend to repeat predefined chunks as nece ssary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 10,
            "pageCount": 2,
            "total": 2
        }
    }
}