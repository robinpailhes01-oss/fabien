import sys, glob, os
from PIL import Image
d=sys.argv[1]; cols=int(sys.argv[2]) if len(sys.argv)>2 else 6
files=sorted(glob.glob(os.path.join(d,'[0-9][0-9].png')))
ims=[Image.open(f) for f in files]
w,h=ims[0].size; tw=int(w*0.25); th=int(h*0.25)
rows=(len(ims)+cols-1)//cols
sheet=Image.new('RGB',(cols*tw,rows*th),'#333')
for i,im in enumerate(ims):
    sheet.paste(im.resize((tw,th)),( (i%cols)*tw,(i//cols)*th))
sheet.save(os.path.join(d,'sheet.png')); print('sheet',sheet.size,len(ims),'frames')
