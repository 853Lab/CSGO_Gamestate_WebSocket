import { Rifle, SubmachineGun, Shotgun, MachineGun, SniperRifle, Pistol, Taser, Shield, Grenade, Knife, C4, ZoneRepulsor, Tablet, StackableItem, BreachCharge, BumpMine } from './Weapon/type';
/** CSGO发来的数据 */
export interface Data {
    map?: {
        mode: string | 'deathmatch';
        name: string;
        phase: 'live' | 'bomb' | 'over' | 'freezetime' | 'paused' | 'defuse' | 'timeout_t' | 'timeout_ct' | 'warmup';
        round: number;
        team_ct: {
            score: number;
            consecutive_round_losses: number;
            timeouts_remaining: number;
            matches_won_this_series: number;
        };
        team_t: {
            score: number;
            consecutive_round_losses: number;
            timeouts_remaining: number;
            matches_won_this_series: number;
        };
        num_matches_to_win_series: number;
        current_spectators: number;
        souvenirs_total: number;
    };
    round?: {
        phase: 'live' | 'bomb' | 'over' | 'freezetime' | 'paused' | 'defuse' | 'timeout_t' | 'timeout_ct' | 'warmup';
    };
    player: {
        steamid: string;
        clan?: string;
        name: string;
        team?: 'T' | 'CT';
        activity: 'menu' | 'playing' | 'textinput';
        state?: {
            health: number;
            armor: number;
            helmet: boolean;
            flashed: number;
            smoked: number;
            burning: number;
            money: number;
            round_kills: number;
            round_killhs: number;
            round_totaldmg?: number;
            equip_value: number;
            defusekit?: boolean;
        };
        weapons?: {
            [key: string]: Rifle | SubmachineGun | Shotgun | MachineGun | SniperRifle | Pistol | Taser | Shield | Grenade | Knife | C4 | ZoneRepulsor | Tablet | StackableItem | BreachCharge | BumpMine;
        };
        match_stats?: {
            kills: number;
            assists: number;
            deaths: number;
            mvps: number;
            score: number;
        };
    };
    previously?: {
        player?: {
            activity?: 'menu' | 'playing';
        };
    };
    added?: {
        player?: {
            state: boolean;
            weapons: boolean;
            match_stats: boolean;
        };
    };
    auth: {
        the853: 'rtx3070ti';
    };
}
