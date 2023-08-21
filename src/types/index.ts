




export type fetchApiMegaMenu ={
    data?:[

        id: any,
        attributes: {
            text: string,
            href: string,
            dropdown: boolean,
           
            mega_menu_dropdowns: {
                data: [
                    {  id: number;



                        attributes: {
                            text: string,
                            href: string,
                            dropdown: boolean}
                        
                        
              }  ]
                
            }
        }
    ]
}