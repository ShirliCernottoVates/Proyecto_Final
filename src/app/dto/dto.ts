export interface IElixir{
  id: string;
  name?: string;
  effect?: string;
  sideEffects?: string;
  characteristics?: string;
  time?: string;
  difficulty: ElixirDificulty;
  ingredients: IIngredient[];
  inventors: IElixirInventor[];
  manufacturer?: string;
}

export enum ElixirDificulty{
  Unknown,
  Advanced,
  Moderate,
  Beginner,
  OrdinaryWizardingLevel,
  OneOfAKind
}

export interface IIngredient{
  id: string;
  name: string;
}

export interface IElixirInventor{
  id: string;
  firstName?: string;
  lastName?: string;
}

export interface ISpell{
  id: string;
  name?: string;
  incantation?: string;
  effect? : string;
  canBeVerbal : boolean;
  type: SpellType;
  light: SpellLight;
  creator?: string;
}

export enum SpellType{
  None,
  Charm,
  Conjuration,
  Spell,
  Transfiguration,
  HealingSpell,
  DarkCharm,
  Jinx,
  Curse,
  MagicalTransportation,
  Hex,
  CounterSpell,
  DarkArts,
  CounterJinx,
  CounterCharm,
  Untransfiguration,
  BindingMagicalContract,
  Vanishment
}

export enum SpellLight{
  None,
  Blue,
  IcyBlue,
  Red,
  Gold,
  Purple,
  Transparent,
  White,
  Green,
  Orange,
  Yellow,
  BrightBlue,
  Pink,
  Violet,
  BlueishWhite,
  Silver,
  Scarlet,
  Fire,
  FieryScarlet,
  Grey,
  DarkRed,
  Turquoise,
  PsychedelicTransparentWave,
  BrightYellow,
  BlackSmoke
}

export interface IFeedback{
  feedBackType: string;
  feedBack: string;
  entityId: string;
}
