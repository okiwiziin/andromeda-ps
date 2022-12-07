import { writeFileSync } from "fs";
import { AvatarData } from "../../resource/avatar.data.loader";

let guid = 1

export const avatars = AvatarData.map((avatar: any) => {
  return {
    avatarId: avatar.ID,
    guid: guid++,
    avatarType: 1,
    fightPropMap: {},
    fetterInfo: {
      expLevel: 10,
      rewardedFetterLevelList: [10],
      fetterList: [],
    },
    propMap: {
      "1001": {
        "type": 1001,
        "ival": 0,
        "val": 0
      },
      "1002": {
        "type": 1002,
        "ival": 4,
        "val": 4
      },
      "4001": {
        "type": 4001,
        "ival": 80,
        "val": 80
      }
    },
    lifeState: 1,
    skillDepotId: avatar['技能库ID'],
  }
})