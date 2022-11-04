
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    //方向
    direction:cc.Vec2 = cc.v2(0,1)

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }

    update (dt) {
       
        
     
        let selfPositionV2 = cc.v2(this.node.position.x,this.node.position.y)
        let tmpDirection;
        let tmp2;
        if (this.direction.x !=0){
             //移动  方向 this.dir.x   速度 100
            this.node.x += this.direction.x * 100 * dt;
            tmpDirection =  this.node.x + this.direction.x * 50
            //cc.v2 是个很坑的参数，尽量避免在update 使用
            tmp2 = cc.v2(tmpDirection,this.node.y)
        }else{
            //移动  方向 this.dir.y   速度 100
            this.node.y += this.direction.y * 100 * dt;
            tmpDirection =  this.node.y + this.direction.y * 50
            //cc.v2 是个很坑的参数，尽量避免在update 使用
            tmp2 = cc.v2(this.node.x,tmpDirection)
        }

         //射线
         let res = cc.director.getPhysicsManager().
         rayCast(selfPositionV2,tmp2,cc.RayCastType.Closest)
        console.log(res.length )
        if(res.length > 0){
                 console.log("console.log(res[0].point ) =" + res[0].point )
                //调转方向
                if (this.direction.y == 1 && this.direction.x == 0){
                    // cc.v2 是个很坑的参数，尽量避免在update 使用
                    this.direction = cc.v2(0,-1)
                }else if (this.direction.y == -1 && this.direction.x == 0){
                    // cc.v2 是个很坑的参数，尽量避免在update 使用
                    this.direction = cc.v2(1,0)
                }else if (this.direction.x == 1 && this.direction.y == 0){
                    // cc.v2 是个很坑的参数，尽量避免在update 使用
                    this.direction = cc.v2(-1,0)
                }else if (this.direction.x == -1 && this.direction.y == 0){
                    //cc.v2 是个很坑的参数，尽量避免在update 使用
                    this.direction = cc.v2(0,1)
                }
            }
        
        
        
    }
}
