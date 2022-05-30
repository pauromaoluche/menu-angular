import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Group from './Group'

export default class Food extends BaseModel {
  @hasOne(() => Group,{
    foreignKey: 'id'
  })
  public group_id: HasOne<typeof Group>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public value: string

  @column()
  public image: string

  @column()
  public group_id: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
