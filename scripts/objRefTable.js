const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.NinePatch,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.Arr,
		C3.Plugins.AJAX,
		C3.Plugins.TiledBg,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Plugins.Audio,
		C3.Plugins.Dictionary,
		C3.Plugins.LocalStorage,
		C3.Behaviors.Tween,
		C3.Plugins.Browser,
		C3.Plugins.Particles,
		C3.Behaviors.Timer,
		C3.Behaviors.Rotate,
		C3.Plugins.Keyboard,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.NinePatch.Acts.Destroy,
		C3.Plugins.Particles.Acts.SetSpraying,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.unixtime,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Behaviors.Rotate.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.viewportmidx,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.NinePatch.Exps.BBoxLeft,
		C3.Plugins.NinePatch.Exps.BBoxRight,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Browser.Acts.LockOrientation,
		C3.Plugins.TiledBg.Acts.SetPos,
		C3.Plugins.TiledBg.Exps.LayerName,
		C3.Plugins.System.Exps.viewportmidy,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.Particles.Acts.SetY,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Particles.Exps.LayerName,
		C3.Plugins.NinePatch.Acts.SetPos,
		C3.Plugins.NinePatch.Exps.LayerName,
		C3.Plugins.System.Exps.viewportright,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.Text.Exps.LayerName,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Browser.Cnds.OnResize,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.OnSuspend,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.NinePatch.Acts.SetWidth,
		C3.Plugins.NinePatch.Cnds.CompareWidth,
		C3.Plugins.NinePatch.Acts.SetVisible,
		C3.Plugins.NinePatch.Exps.Width,
		C3.Plugins.NinePatch.Acts.SetEffectParam,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
		C3.Plugins.NinePatch.Cnds.PickChildren,
		C3.Plugins.System.Exps.log10,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.ImageWidth,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Exps.ImageHeight,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Text.Acts.SetHAlign,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Text.Acts.SetWidth,
		C3.Plugins.Text.Exps.TextWidth,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.NinePatch.Exps.BBoxTop,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.NinePatch.Exps.Y,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.NinePatch.Exps.BBoxBottom,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Plugins.TiledBg.Acts.AddChild,
		C3.Plugins.NinePatch.Acts.SetInstanceVar,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.System.Cnds.IsBetweenAngles,
		C3.Plugins.Touch.Exps.AngleAt,
		C3.Plugins.Touch.Exps.SpeedAt,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetAcceleration,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.TiledBg.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.NinePatch.Exps.Height,
		C3.Plugins.TiledBg.Acts.SetY,
		C3.Plugins.TiledBg.Exps.Height,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.NinePatch.Cnds.IsVisible,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.NinePatch.Exps.UID,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.Arr.Cnds.CompareXY,
		C3.Plugins.NinePatch.Cnds.PickByUID,
		C3.Plugins.NinePatch.Acts.AddInstanceVar,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.System.Cnds.PickNth,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Particles.Acts.SetRate,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.System.Exps.max,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.System.Exps.layeropacity,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.NinePatch.Cnds.IsOnLayer,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Particles.Acts.SetPos,
		C3.Plugins.Particles.Acts.SetXRandomiser,
		C3.Plugins.Particles.Acts.SetYRandomiser,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.Text.Acts.SubInstanceVar,
		C3.Plugins.Text.Acts.SetY,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.NinePatch.Exps.X,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.CurX,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Text.Exps.IID,
		C3.Plugins.Arr.Exps.JoinString,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemSet,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.LocalStorage.Acts.ClearStorage,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Exps.loadingprogress,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.System.Acts.GoToLayout,
		C3.ScriptsInEvents.Sdk_Event1_Act1,
		C3.ScriptsInEvents.Sdk_Event2_Act1,
		C3.ScriptsInEvents.Sdk_Event3_Act1,
		C3.ScriptsInEvents.Sdk_Event4_Act1,
		C3.ScriptsInEvents.Sdk_Event5_Act1,
		C3.ScriptsInEvents.Sdk_Event6_Act1
	];
};
self.C3_JsPropNameTable = [
	{name: 0},
	{price: 0},
	{level: 0},
	{effect: 0},
	{btn_inactive: 0},
	{skin: 0},
	{clicks: 0},
	{shark: 0},
	{hidden: 0},
	{menuBtn: 0},
	{energyScaleBg: 0},
	{energyScale: 0},
	{scroll_bg: 0},
	{pos: 0},
	{DragDrop: 0},
	{scroller: 0},
	{Touch: 0},
	{arUpg: 0},
	{AJAX: 0},
	{Bullet: 0},
	{scroll_pane: 0},
	{btn_icon: 0},
	{purpose: 0},
	{x2time: 0},
	{Fade: 0},
	{Text: 0},
	{level_bar_bg: 0},
	{subLevel: 0},
	{level_bar: 0},
	{Audio: 0},
	{gameData: 0},
	{LocalStorage: 0},
	{Tween: 0},
	{partCoin: 0},
	{btn_close: 0},
	{popLayer: 0},
	{bgPopups: 0},
	{Browser: 0},
	{value: 0},
	{min: 0},
	{max: 0},
	{slider_knob: 0},
	{conf_emitter: 0},
	{conf_sprite: 0},
	{bg_reward: 0},
	{partHooray: 0},
	{slider_bg: 0},
	{set_icons: 0},
	{loaderImg: 0},
	{bg_main: 0},
	{"2x": 0},
	{energyBurn: 0},
	{Timer: 0},
	{btn_reset: 0},
	{load_fade: 0},
	{Rotate: 0},
	{loadspin: 0},
	{icoText: 0},
	{hint_bg: 0},
	{hint_corner: 0},
	{bonus_head: 0},
	{gui_mask: 0},
	{txt_bubble: 0},
	{txt_bubble_pip: 0},
	{bigNum: 0},
	{Keyboard: 0},
	{menuPanel: 0},
	{bgLeader: 0},
	{arLeader: 0},
	{BUTTON0: 0},
	{textTop: 0},
	{energy: 0},
	{coinX: 0},
	{coinY: 0},
	{btnTap: 0},
	{btnTon: 0},
	{icoMoney: 0},
	{incomePanel: 0},
	{index: 0},
	{open: 0},
	{btnUpg: 0},
	{boostIcon: 0},
	{bgBooster: 0},
	{bgTop: 0},
	{btnTake: 0},
	{Text2: 0},
	{moviebutton: 0},
	{sendton: 0},
	{btnSprite: 0},
	{confetti: 0},
	{destroy: 0},
	{bgs: 0},
	{btnPatch: 0},
	{priceMultiplier: 0},
	{effectMultiplier: 0},
	{dailyTime: 0},
	{money: 0},
	{totalMoney: 0},
	{scopeScore: 0},
	{earnClick: 0},
	{earnSec: 0},
	{earnOffline: 0},
	{fullPower: 0},
	{powerScale: 0},
	{started: 0},
	{btnTween: 0},
	{popup: 0},
	{soundVol: 0},
	{musicVol: 0},
	{fullScrn: 0},
	{firstTouch: 0},
	{enPrice: 0},
	{earnBonus: 0},
	{rewOffer: 0},
	{adTimer: 0},
	{bonusTimer: 0},
	{click: 0},
	{sec: 0},
	{btnUID: 0},
	{btnIndex: 0},
	{btnName: 0},
	{btnPrice: 0},
	{pickLayer: 0},
	{status: 0},
	{type: 0},
	{style: 0},
	{bonusType: 0},
	{unlock: 0},
	{txt: 0},
	{intNum: 0},
	{ajaxData: 0},
	{domain: 0},
	{userID: 0},
	{userName: 0},
	{curDate: 0},
	{recipientAddress: 0},
	{tonConnected: 0}
];

self.InstanceType = {
	btn_inactive: class extends self.IWorldInstance {},
	shark: class extends self.ISpriteInstance {},
	menuBtn: class extends self.ISpriteInstance {},
	energyScaleBg: class extends self.IWorldInstance {},
	energyScale: class extends self.IWorldInstance {},
	scroll_bg: class extends self.IWorldInstance {},
	scroller: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	arUpg: class extends self.IArrayInstance {},
	AJAX: class extends self.IInstance {},
	scroll_pane: class extends self.ITiledBackgroundInstance {},
	btn_icon: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	level_bar_bg: class extends self.IWorldInstance {},
	level_bar: class extends self.IWorldInstance {},
	Audio: class extends self.IInstance {},
	gameData: class extends self.IDictionaryInstance {},
	LocalStorage: class extends self.IInstance {},
	partCoin: class extends self.ISpriteInstance {},
	btn_close: class extends self.ISpriteInstance {},
	bgPopups: class extends self.ITiledBackgroundInstance {},
	Browser: class extends self.IInstance {},
	slider_knob: class extends self.ISpriteInstance {},
	conf_emitter: class extends self.IParticlesInstance {},
	conf_sprite: class extends self.ISpriteInstance {},
	bg_reward: class extends self.IWorldInstance {},
	partHooray: class extends self.IParticlesInstance {},
	slider_bg: class extends self.IWorldInstance {},
	set_icons: class extends self.ISpriteInstance {},
	loaderImg: class extends self.ISpriteInstance {},
	bg_main: class extends self.ITiledBackgroundInstance {},
	_2x: class extends self.ISpriteInstance {},
	energyBurn: class extends self.IParticlesInstance {},
	btn_reset: class extends self.ISpriteInstance {},
	load_fade: class extends self.ITiledBackgroundInstance {},
	loadspin: class extends self.ISpriteInstance {},
	icoText: class extends self.ISpriteInstance {},
	hint_bg: class extends self.IWorldInstance {},
	hint_corner: class extends self.ISpriteInstance {},
	bonus_head: class extends self.ISpriteInstance {},
	gui_mask: class extends self.ITiledBackgroundInstance {},
	txt_bubble: class extends self.IWorldInstance {},
	txt_bubble_pip: class extends self.ISpriteInstance {},
	bigNum: class extends self.IDictionaryInstance {},
	Keyboard: class extends self.IInstance {},
	menuPanel: class extends self.IWorldInstance {},
	bgLeader: class extends self.IWorldInstance {},
	arLeader: class extends self.IArrayInstance {},
	textTop: class extends self.ITextInstance {},
	btnTap: class extends self.ISpriteInstance {},
	btnTon: class extends self.IWorldInstance {},
	icoMoney: class extends self.ISpriteInstance {},
	incomePanel: class extends self.IWorldInstance {},
	btnUpg: class extends self.IWorldInstance {},
	boostIcon: class extends self.ISpriteInstance {},
	bgBooster: class extends self.IWorldInstance {},
	bgTop: class extends self.IWorldInstance {},
	btnTake: class extends self.IWorldInstance {},
	Text2: class extends self.ITextInstance {},
	moviebutton: class extends self.IButtonInstance {},
	sendton: class extends self.IButtonInstance {},
	btnSprite: class extends self.ISpriteInstance {},
	confetti: class extends self.IParticlesInstance {},
	destroy: class extends self.ISpriteInstance {},
	bgs: class extends self.ITiledBackgroundInstance {},
	btnPatch: class extends self.IWorldInstance {}
}