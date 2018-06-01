import { BaseDomain } from 'core/domain/common'

export class Profile extends BaseDomain {
  constructor (
    public avatar: string,
    public fullName: string,
    public banner: string,
    public tagLine: string,
    public creationDate: number,
    public privateKey: string,
    public email?: string | null,
    public birthday?: number,
    public webUrl?: string,
    public companyName?: string,
    public twitterId?: string,
  ) {
    super()

  }

}
