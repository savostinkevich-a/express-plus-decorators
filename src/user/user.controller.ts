import {Controller} from "../_core/decorators/controller.decorator";
import {Get} from "../_core/decorators/route.decorator";
import {Params} from "../_core/decorators/params.decorator";

@Controller('/user')
export default class UserController {
    @Get('/')
    public index() {
        return 'User overview'
    }

    @Get('/:name')
    public details(@Params("name") name: string) {
        console.log(name)
        return `You are looking at the profile of `
    }
}