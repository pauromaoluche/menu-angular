import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Group from 'App/Models/Group';

export default class GroupsController {

    public async store({request, params, response}: HttpContextContract){
        const body = request.body();

        const group = await Group.create(body)

        response.status(201)

        return{
            message: 'Grupo adicionado com sucesso!',
            data: group
        }

    }

    public async index() {
        const groups = await Group.all();

        return {
            data: groups
        }
    }
    public async show({ params }: HttpContextContract) {
        const group = await Group.findOrFail(params.id)

        return {
            data: group,
        }
    }

    public async destroy({ params }: HttpContextContract) {
        const group = await Group.findOrFail(params.id)
        await group.delete()

        return {
            message: "Comida excluida com sucesso!",
            data: group,
        }
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();

        const group = await Group.findOrFail(params.id);

        group.name = body.name;
        group.text = body.text;

        await group.save()
        return {
            message: "Comida atualizada com sucesso",
        }
    }
}
