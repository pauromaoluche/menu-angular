/* gera ID aleatorios gigantes */
import { v4 as uuidv4 } from 'uuid'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/* pacote application, serve para mover a imagem para o local que queremos */
import Application from '@ioc:Adonis/Core/Application';

import Food from 'App/Models/Food'
import Group from 'App/Models/Group';

export default class FoodsController {
    private validationOptions = {
        types: ['image'],
        size: '2mb',
    }

    /* Recebe dados pela request, e envia dados pela response */
    public async store({ request, response }: HttpContextContract) {
        const body = request.body();

        const group = await Group.findOrFail(body.group_id)

        body.group_id = group.id

        /* Faz o insert no banco de dados, como essa requisição não acontece
        instantaneamente, passamos um await em Food */
        const image = request.file('image', this.validationOptions)

        if (image) {
            const imageName = `${uuidv4()}.${image.extname}`

            await image.move(Application.tmpPath('uploads'), {
                name: imageName
            })

            body.image = imageName
        }

        const food = await Food.create(body)

        response.status(201)

        return {
            message: "Comida cadastrada com sucesso!",
            data: food,
        }
    }

    public async index() {
        const foods = await Food.query().preload('group_id');

        return {
            data: foods
        }
    }

    public async show({ params }: HttpContextContract) {
        const food = await Food.findOrFail(params.id)

        return {
            data: food,
        }
    }

    public async destroy({ params }: HttpContextContract) {
        const food = await Food.findOrFail(params.id)
        await food.delete()

        return {
            message: "Comida excluida com sucesso!",
            data: food,
        }
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();

        const food = await Food.findOrFail(params.id);

        food.name = body.name;
        food.description = body.description;
        food.value = body.description;
        food.group_id = body.group_id;

        if (food.image != body.image || food.image) {
            const image = request.file('image', this.validationOptions)

            if (image) {
                const imageName = `${uuidv4()}.${image.extname}`
                await image.move(Application.tmpPath('uploads'), {
                    name: imageName,
                })
                body.image = imageName
            }
        }
        await food.save()
        return {
            message: "Comida atualizada com sucesso",
        }
    }
}
