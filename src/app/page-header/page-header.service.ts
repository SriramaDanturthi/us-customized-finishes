import { Injectable } from '@angular/core';

@Injectable()
export class PageHeaderService {

    constructor() { }

    getMenu(): Array<any> {
        const menu = [
            {
                path: './home',
                title: 'Home'
            },
            {
                path: './contactus',
                title: 'Contact US'
            },
            {
                path: './companyprofile',
                title: 'Company Profile'
            },
            {
                path: './howtoorder',
                title: 'How To Order'
            },
            {
                path: './galleryandvideos',
                title: 'Gallery And Videos'
            },
            {
                path: './finishes',
                title: 'Finishes'
            },
            {
                path: './faq',
                title: 'Frequently Aasked Questions'
            },
            {
                path: './warranty',
                title: 'Warranty'
            },
            {
                path: './cabinetdoors',
                title: 'Cabinet Doors'
            },
            {
                path: './moldings',
                title: 'Modlings'
            },
            {
                path: './drawerfronts',
                title: 'Drawer Fronts'
            },
            {
                path: './accessories',
                title: 'Accessories'
            },
            {
                path: './cabinetdoorsanddrawerfronts',
                title: 'Cabinet Doors And Drawer Fronts',
                children: [
                    {
                        path: './1-PIECE-MDF-DESIGNS',
                        title: '1 PIECE MDF DESIGNS',
                        children: [
                            {
                                title: 'FLAT PANEL DOORS',
                                children: [
                                    { title: 'CLASSIC SLAB' },
                                    { title: 'IS 100' },
                                    { title: 'IS 200' },
                                    {
                                        title: 'V-GROOVE',
                                    }
                                ]
                            },
                            {
                                title: 'ROUNDED CORNER DOORS',
                                children: [
                                    {
                                        title: 'RC100',

                                    },
                                    {
                                        title: 'RC200',

                                    },
                                    {
                                        title: 'RC300',

                                    },
                                    {
                                        title: 'RC400',

                                    },
                                    {
                                        title: 'RC500',

                                    },
                                    {
                                        title: 'RC600',

                                    },
                                    {
                                        title: 'RC700',

                                    },
                                    {
                                        title: 'RC800',

                                    },
                                    {
                                        title: 'ACCLAIM',

                                    },
                                    {
                                        title: 'AVANTI',

                                    },
                                    {
                                        title: 'LEX300',

                                    },
                                    {
                                        title: 'SQRS',

                                    }
                                ]
                            },
                            {
                                title: 'SQUARE CORNER DOORS',
                                children: [
                                    {
                                        title: 'LEXINGTON',

                                    },
                                    {
                                        title: 'SQ',

                                    },
                                    {
                                        title: 'SQ300',

                                    },
                                    {
                                        title: 'CHESAPEAKE',

                                    },
                                    {
                                        title: 'BCC',

                                    },
                                    {
                                        title: 'SC100',

                                    }
                                ]
                            },
                            {
                                title: 'SHAKER DOORS',
                                children: [
                                    {
                                        title: 'SHAKER 1',

                                    },
                                    {
                                        title: 'SHAKER 2',

                                    },
                                    {
                                        title: 'SHAKER 3',

                                    },
                                    {
                                        title: 'SHAKER 4',

                                    },
                                    {
                                        title: 'SHAKER 5',

                                    },
                                    {
                                        title: 'SHAKER 7',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: './5-PIECE-MDF-DESIGNS',
                        title: '5 PIECE MDF DESIGNS',
                        children: [
                            {
                                title: '2000',

                            },
                            {
                                title: '2003',

                            },
                            {
                                title: '2004',

                            },
                            {
                                title: '2006',

                            }
                        ]
                    },
                    {
                        path: './GLASS-DOORS',
                        title: 'GLASS DOORS',
                        children: [
                            {
                                title: '7 LIGHT SPECIAL',

                            },
                            {
                                title: 'LEX 4 LIGHT FULL ROUND',

                            },
                            {
                                title: 'LEX 8 LIGHT',

                            },
                            {
                                title: 'LEX PROVENCIAL 4 LIGHT',

                            },
                            {
                                title: 'RC 300 - 4 LIGHT',

                            },
                            {
                                title: 'SHAKER 3 - 6 LIGHT',

                            },
                            {
                                title: 'SQ 6 LIGHT CATHEDRAL',

                            },
                            {
                                title: 'SQ 7 LIGHT SPLIT FULL ROUND',

                            },
                            {
                                title: 'SQ 9 LIGHT ARCH',

                            },
                            {
                                title: 'SQ 9 LIGHT SQUARE',

                            },
                            {
                                title: 'SQ ARCH 4 LIGHT',

                            }
                        ]
                    },
                    {
                        title: 'HARDWOOD DOORS',
                        path: './HARDWOOD-DOORS',
                    }
                ]
            }
        ];

        return menu;
    }

}