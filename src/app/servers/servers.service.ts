import { Injectable } from "@angular/core"

// @Injectable (){

// }

export class ServersService {

    private servers = [
        {
            id : 1,
            name : "Productionserver",
            status : "Online"
        },
        {
            id : 2,
            name : "DevelopmentServer",
            status : "Offline"
        },
        {
            id : 3,
            name : "Testserver",
            status : "Online"
        }
    ]

    getServers (){
        return this.servers
    }

    getServer (id : number){
        const server = this.servers.find(element => {
            element.id === id
        })
        console.log("server get ", server)
        return server
    }

    updateServer (id : number, serverInfo : {name : string, status : string}){
        const server = this.servers.find(element => {
            element.id === id
        })

        if(server){
            server.name = serverInfo.name
            server.status = serverInfo.status
        }        
    }
}