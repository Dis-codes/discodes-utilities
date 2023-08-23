import { Badges } from "./Badges";

export default function GetUserBadges(rolesArray: Array<string>) {
    let matchingRoles: Array<string> = [];
    let ObjArray: Array<string> = Object.keys(Badges).map((key) => Badges[key]);
    matchingRoles = rolesArray.filter(role => ObjArray.includes(role))
    return matchingRoles
}
