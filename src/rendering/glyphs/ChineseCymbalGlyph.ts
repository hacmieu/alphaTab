import { MusicFontGlyph } from '@src/rendering/glyphs/MusicFontGlyph';
import { MusicFontSymbol } from '@src/rendering/glyphs/MusicFontSymbol';
import { NoteHeadGlyph } from '@src/rendering/glyphs/NoteHeadGlyph';

export class ChineseCymbalGlyph extends MusicFontGlyph {
    private _isGrace: boolean;

    public constructor(x: number, y: number, isGrace: boolean) {
        super(x, y, isGrace ? NoteHeadGlyph.GraceScale : 1, MusicFontSymbol.NoteHarmonic);
        this._isGrace = isGrace;
    }

    public doLayout(): void {
        this.width = 9 * (this._isGrace ? NoteHeadGlyph.GraceScale : 1) * this.scale;
        this.height = NoteHeadGlyph.NoteHeadHeight * this.scale;
    }
}
