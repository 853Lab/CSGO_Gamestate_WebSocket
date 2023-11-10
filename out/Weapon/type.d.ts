/**
 * 步枪
 */
export interface Rifle {
    /** 步枪名称 */
    name: 'weapon_ak47' | 'weapon_aug' | 'weapon_famas' | 'weapon_galilar' | 'weapon_m4a1_silencer' | 'weapon_m4a1' | 'weapon_sg556';
    paintkit: string | 'default';
    type: 'Rifle';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断步枪
 */
export declare const RifleOf: (object: any) => object is Rifle;
/**
 * 冲锋枪
 */
export interface SubmachineGun {
    /** 冲锋枪名称 */
    name: 'weapon_mac10' | 'weapon_mp7' | 'weapon_mp9' | 'weapon_mp5sd' | 'weapon_bizon' | 'weapon_p90' | 'weapon_ump45';
    paintkit: string | 'default';
    type: 'Submachine Gun';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断冲锋枪
 */
export declare const SubmachineGunOf: (object: any) => object is SubmachineGun;
/**
 * 霰弹枪
 */
export interface Shotgun {
    /** 霰弹枪名称 */
    name: 'weapon_mag7' | 'weapon_nova' | 'weapon_sawedoff' | 'weapon_xm1014';
    paintkit: string | 'default';
    type: 'Shotgun';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断霰弹枪
 */
export declare const ShotgunOf: (object: any) => object is Shotgun;
/**
 * 机枪
 *
 * "Hey man! Hold it down, It's a Machine Gun! Machine Gun!"
 *
 * "Haha, Okay!"
 */
export interface MachineGun {
    /** 机枪名称 */
    name: 'weapon_m249' | 'weapon_negev';
    paintkit: string | 'default';
    type: 'Machine Gun';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断机枪
 */
export declare const MachineGunOf: (object: any) => object is MachineGun;
/**
 * 狙击枪
 */
export interface SniperRifle {
    name: 'weapon_awp' | 'weapon_g3sg1' | 'weapon_scar20' | 'weapon_ssg08';
    paintkit: string | 'default';
    type: 'SniperRifle';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断狙击枪
 */
export declare const SniperRifleOf: (object: any) => object is SniperRifle;
/**
 * 手枪
 */
export interface Pistol {
    name: 'weapon_revolver' | 'weapon_usp_silencer' | 'weapon_cz75a' | 'weapon_deagle' | 'weapon_elite' | 'weapon_fiveseven' | 'weapon_glock' | 'weapon_hkp2000' | 'weapon_p250' | 'weapon_tec9';
    paintkit: string | 'default';
    type: 'Pistol';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断手枪
 */
export declare const PistolOf: (object: any) => object is Pistol;
/**
 * 电击枪
 */
export interface Taser {
    name: 'weapon_taser';
    paintkit: string | 'default';
    /** 当前弹药量 */
    ammo_clip: number;
    /** 最高当前弹药量 */
    ammo_clip_max: number;
    /** 背包弹药量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断电击枪
 */
export declare const TaserOf: (object: any) => object is Taser;
/**
 * 🛡️
 *
 * 盾牌
 */
export interface Shield {
    name: 'weapon_shield';
    paintkit: 'default';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断盾牌
 */
export declare const ShieldOf: (object: any) => object is Shield;
/**
 * 投掷物
 */
export interface Grenade {
    /** 投掷物类型 */
    name: 'weapon_hegrenade' | 'weapon_flashbang' | 'weapon_smokegrenade' | 'weapon_decoy' | 'weapon_incgrenade' | 'weapon_molotov' | 'weapon_snowball' | 'weapon_tagrenade';
    paintkit: 'default';
    type: 'Grenade';
    /** 投掷物数量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断投掷物
 */
export declare const GrenadeOf: (object: any) => object is Grenade;
/**
 * 🔪️
 *
 * 菜刀（★）| 默认皮肤(崭新出土)
 */
export interface Knife {
    name: string | 'weapon_knife';
    paintkit: string | 'default';
    type: 'Knife';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断🔪️
 */
export declare const KnifeOf: (object: any) => object is Knife;
/**
 * C4
 */
export interface C4 {
    name: 'weapon_c4';
    paintkit: string | 'default';
    type: 'C4';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断C4
 */
export declare const C4Of: (object: any) => object is C4;
/**
 * 排斥装置
 */
export interface ZoneRepulsor {
    name: 'weapon_zone_repulsor';
    paintkit: 'default';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断排斥装置
 */
export declare const ZoneRepulsorOf: (object: any) => object is ZoneRepulsor;
/**
 * 特训助手
 */
export interface Tablet {
    name: 'weapon_tablet';
    ammo_clip: number;
    ammo_clip_max: number;
    paintkit: 'default';
    type: 'Tablet';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断特训助手
 */
export declare const TabletOf: (object: any) => object is Tablet;
/**
 * 医疗针
 */
export interface StackableItem {
    name: 'weapon_healthshot';
    /** 治疗针数量 */
    ammo_reserve: number;
    paintkit: 'default';
    type: 'StackableItem';
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断医疗针
 */
export declare const StackableItemOf: (object: any) => object is StackableItem;
/**
 * 遥控炸弹
 */
export interface BreachCharge {
    name: 'weapon_breachcharge';
    paintkit: 'default';
    type: 'Breach Charge';
    /** 当前炸弹量 */
    ammo_clip: number;
    /** 最高当前炸弹量 */
    ammo_clip_max: number;
    /** 背包炸弹量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断遥控炸弹
 */
export declare const BreachChargeOf: (object: any) => object is BreachCharge;
/**
 * 弹射地雷
 */
export interface BumpMine {
    name: 'weapon_bumpmine';
    paintkit: 'default';
    type: 'Bump Mine';
    /** 当前地雷量 */
    ammo_clip: number;
    /** 最高当前地雷量 */
    ammo_clip_max: number;
    /** 背包地雷量 */
    ammo_reserve: number;
    /** active在手上，holstered在背包 */
    state: 'active' | 'holstered';
}
/**
 * 判断弹射地雷
 */
export declare const BumpMineOf: (object: any) => object is BumpMine;
/**
 * 只判断是否主武器
 */
export declare const Gun: (object: any) => object is Rifle | SubmachineGun | Shotgun | MachineGun | SniperRifle;
